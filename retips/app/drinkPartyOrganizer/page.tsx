"use client";

import { useState } from "react";
import GroupForm from "./GroupForm";
import CopyArea from "./CopyArea";
import ResultVerification from "./resultVerification";

interface Group {
  groupName: string;
  groupCount: number;
  groupAmountPerPerson: number;
  groupTotalAmount: number;
}

const DrinkPartyOrganizerPage = () => {
  const [calculationMode, setCalculationMode] = useState("courseFee"); // "courseFee" or "totalBill"
  const [courseFee, setCourseFee] = useState<number | "">("");
  const [totalBill, setTotalBill] = useState<number | "">("");
  const [totalPeople, setTotalPeople] = useState<number | "">("");
  const [groups, setGroups] = useState<Group[]>([
    {
      groupName: "",
      groupCount: 0,
      groupAmountPerPerson: 0,
      groupTotalAmount: 0,
    },
  ]);

  const addGroup = () => {
    setGroups((prevGroups) => [
      ...prevGroups,
      {
        groupName: "",
        groupCount: 0,
        groupAmountPerPerson: 0,
        groupTotalAmount: 0,
      },
    ]);
  };

  const removeGroup = (index: number) => {
    // グループが1つの場合は削除しない
    if (groups.length > 1) {
      const newGroups = [...groups];
      newGroups.splice(index, 1);
      setGroups(newGroups);
    }
  };

  const calculateTotals = () => {
    const totalGroupCount = groups.reduce(
      (sum, group) => sum + group.groupCount,
      0
    );
    const totalGroupAmount = groups.reduce(
      (sum, group) => sum + group.groupCount * group.groupAmountPerPerson,
      0
    );

    return {
      totalGroupCount,
      totalGroupAmount,
      billMatches: Number(totalBill) === totalGroupAmount,
      peopleMatch: Number(totalPeople) === totalGroupCount,
    };
  };

  const { totalGroupCount, totalGroupAmount, billMatches, peopleMatch } =
    calculateTotals();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">飲み会計算ツール</h1>

      {/* 請求・人数情報 */}
      <div className="border border-gray-300 p-4 rounded-lg mb-6 w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">請求・人数情報</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <label className="font-medium">計算方法:</label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="calculationMode"
                value="courseFee"
                checked={calculationMode === "courseFee"}
                onChange={() => {
                  setCalculationMode("courseFee");
                  setTotalBill("");
                }}
              />
              <span>コース料金 (1人分)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="calculationMode"
                value="totalBill"
                checked={calculationMode === "totalBill"}
                onChange={() => {
                  setCalculationMode("totalBill");
                  setCourseFee("");
                }}
              />
              <span>請求金額</span>
            </label>
          </div>

          {calculationMode === "courseFee" && (
            <>
              <div className="flex items-center space-x-2">
                <label htmlFor="courseFee" className="font-medium">
                  コース料金 (1人分):
                </label>
                <input
                  type="number"
                  id="courseFee"
                  value={courseFee}
                  onChange={(e) =>
                    setCourseFee(
                      e.target.value !== "" ? Number(e.target.value) : ""
                    )
                  }
                  className="border rounded-md px-2 py-1 w-full"
                  placeholder="例: 5000"
                />
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <label htmlFor="totalPeople" className="font-medium">
                  参加人数:
                </label>
                <input
                  type="number"
                  id="totalPeople"
                  value={totalPeople}
                  onChange={(e) =>
                    setTotalPeople(
                      e.target.value !== "" ? Number(e.target.value) : ""
                    )
                  }
                  className="border rounded-md px-2 py-1 w-full"
                  placeholder="例: 4"
                />
              </div>
            </>
          )}

          {calculationMode === "totalBill" && (
            <>
              <div className="flex items-center space-x-2">
                <label htmlFor="totalBill" className="font-medium">
                  請求金額:
                </label>
                <input
                  type="number"
                  id="totalBill"
                  value={totalBill}
                  onChange={(e) =>
                    setTotalBill(
                      e.target.value !== "" ? Number(e.target.value) : ""
                    )
                  }
                  className="border rounded-md px-2 py-1 w-full"
                  placeholder="例: 20000"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="totalPeople" className="font-medium">
                  参加人数:
                </label>
                <input
                  type="number"
                  id="totalPeople"
                  value={totalPeople}
                  onChange={(e) =>
                    setTotalPeople(
                      e.target.value !== "" ? Number(e.target.value) : ""
                    )
                  }
                  className="border rounded-md px-2 py-1 w-full"
                  placeholder="例: 4"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* グループ情報 */}
      <GroupForm
        groups={groups}
        setGroups={setGroups}
        addGroup={addGroup}
        removeGroup={removeGroup}
      />

      {/* 結果の照合 */}
      <ResultVerification
        calculationMode={calculationMode}
        courseFee={courseFee}
        totalBill={totalBill}
        totalPeople={totalPeople}
        totalGroupAmount={totalGroupAmount}
        totalGroupCount={totalGroupCount}
        billMatches={billMatches}
        peopleMatch={peopleMatch}
      />

      {/* コピーエリア */}
      <CopyArea
        calculationMode={calculationMode}
        courseFee={courseFee}
        totalBill={totalBill}
        totalPeople={totalPeople}
        groups={groups}
        totalGroupAmount={totalGroupAmount}
        totalGroupCount={totalGroupCount}
        billMatches={billMatches}
        peopleMatch={peopleMatch}
      />
    </div>
  );
};

export default DrinkPartyOrganizerPage;

// app/drinkPartyOrganizer/CopyArea.tsx
"use client";

import CopyButton from "./CopyButton";

interface Group {
  groupName: string;
  groupCount: number;
  groupAmountPerPerson: number;
}

interface CopyAreaProps {
  courseFee: number | "";
  totalBill: number | "";
  totalPeople: number | "";
  groups: Group[];
  totalGroupAmount: number;
  totalGroupCount: number;
}

const CopyArea = ({
  courseFee,
  totalBill,
  totalPeople,
  groups,
  totalGroupAmount,
  totalGroupCount,
}: CopyAreaProps) => {
  const copyText = `１人分のコース料金：${courseFee || 0}円\n参加人数：${
    totalPeople || 0
  }人\n請求金額：${totalBill || 0}円\n--------------------\n${groups
    .map(
      (group) =>
        `◇${group.groupName || "グループ名未設定"}◇\n支払額：${
          group.groupAmountPerPerson || 0
        }円  人数：${group.groupCount || 0}人  合計：${
          (group.groupAmountPerPerson || 0) * (group.groupCount || 0)
        }円\n--------------------`
    )
    .join("\n")}全グループ支払額合計：${
    totalGroupAmount || 0
  }円\n全グループ人数合計：${totalGroupCount || 0}人`;

  return (
    <div className="w-full max-w-2xl">
      <textarea
        readOnly
        value={copyText}
        className="border rounded-md p-2 w-full h-48 mb-2"
      />
      <CopyButton text={copyText} />
    </div>
  );
};

export default CopyArea;

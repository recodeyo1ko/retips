// app/drinkPartyOrganizer/ResultVerification.tsx
"use client";

interface ResultVerificationProps {
  calculationMode: string;
  courseFee: number | "";
  totalBill: number | "";
  totalPeople: number | "";
  totalGroupAmount: number;
  totalGroupCount: number;
  billMatches: boolean;
  peopleMatch: boolean;
}

const ResultVerification = ({
  calculationMode,
  courseFee,
  totalBill,
  totalPeople,
  totalGroupAmount,
  totalGroupCount,
  billMatches,
  peopleMatch,
}: ResultVerificationProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg mb-6 w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-4">結果の照合</h2>
      <div className="space-y-2">
        {calculationMode === "courseFee" && (
          <p className={peopleMatch ? "text-green-500" : "text-red-500"}>
            コース料金 (1人分): {courseFee || 0} 円, 参加人数:{" "}
            {totalPeople || 0} 人
          </p>
        )}
        {calculationMode === "totalBill" && (
          <p className={billMatches ? "text-green-500" : "text-red-500"}>
            請求金額: {totalBill || 0} 円, 全グループ支払額合計:{" "}
            {totalGroupAmount} 円
          </p>
        )}
        <p>
          {calculationMode === "courseFee"
            ? `参加人数と全グループ人数合計は` +
              (peopleMatch ? "一致しています" : "一致していません")
            : `請求金額と全グループ支払額合計は` +
              (billMatches ? "一致しています" : "一致していません")}
        </p>
      </div>
    </div>
  );
};

export default ResultVerification;

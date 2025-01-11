"use client";

interface Group {
  groupName: string;
  groupCount: number;
  groupAmountPerPerson: number;
}

interface GroupFormProps {
  groups: Group[];
  setGroups: (groups: Group[]) => void;
  addGroup: () => void;
}

const GroupForm = ({ groups, setGroups, addGroup }: GroupFormProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg mb-6 w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-4">グループ情報</h2>
      <div className="flex justify-between font-semibold mb-2">
        <span className="w-1/3 text-center">グループ名</span>
        <span className="w-1/3 text-center">人数</span>
        <span className="w-1/3 text-center">一人当たり支払額</span>
      </div>
      <div className="flex flex-col space-y-4">
        {groups.map((group, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="グループ名 (例: Aチーム)"
              value={group.groupName}
              onChange={(e) => {
                const newGroups = [...groups];
                newGroups[index].groupName = e.target.value;
                setGroups(newGroups);
              }}
              className="border rounded-md px-2 py-1 w-1/3"
            />
            <input
              type="number"
              placeholder="人数 (例: 2)"
              value={group.groupCount}
              onChange={(e) => {
                const newGroups = [...groups];
                newGroups[index].groupCount = Number(e.target.value);
                setGroups(newGroups);
              }}
              className="border rounded-md px-2 py-1 w-1/3"
            />
            <input
              type="number"
              placeholder="支払額 (1人分: 例: 5000)"
              value={group.groupAmountPerPerson}
              onChange={(e) => {
                const newGroups = [...groups];
                newGroups[index].groupAmountPerPerson = Number(e.target.value);
                setGroups(newGroups);
              }}
              className="border rounded-md px-2 py-1 w-1/3"
            />
          </div>
        ))}
        <button
          onClick={addGroup}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          グループ追加
        </button>
      </div>
    </div>
  );
};

export default GroupForm;

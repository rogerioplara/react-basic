import { Student } from "@/types/Student";

type Props = {
    list: Student[]
}

export const GradeTable = ({ list }: Props) => {
    return(
        <div>
            <table className="min-w-full bg-white border border-gray-200 shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border-b text-left">Name</th>
                        <th className="px-4 py-2 border-b text-left">Status</th>
                        <th className="px-4 py-2 border-b text-left">Grade 1</th>
                        <th className="px-4 py-2 border-b text-left">Grade 2</th>
                        <th className="px-4 py-2 border-b text-left">Final Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(student => 
                        <tr key={student.id}>
                            <td className="px-4 py-2 border-b">
                                <div className="flex items-center gap-3">
                                    <img
                                        className="size-11 rounded-full object-cover"
                                        src={student.avatar}
                                        alt={student.name}
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-medium">{student.name}</span>
                                        <span className="text-sm text-gray-500">{student.email}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-2 border-b">
                                {
                                student.active ? 
                                <div className="flex justify-center items-center bg-green-600 rounded-md px-3 text-white text-sm">
                                    Active
                                </div>
                                :
                                <div className="flex justify-center items-center bg-red-600 rounded-md px-2 text-white text-sm">
                                    Inactive
                                </div>
                                }                                
                            </td>
                            <td className="px-4 py-2 border-b">{student.grade1}</td>
                            <td className="px-4 py-2 border-b">{student.grade2}</td>
                            <td className="px-4 py-2 border-b font-bold">{
                                student.active ?
                                ((student.grade1 + student.grade2) / 2).toFixed(1) :
                                '--'
                            }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
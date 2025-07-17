import { GradeTable } from '@/components/StudentTable';
import { students } from '@/data/students';

const Page = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-black
    bg-gradient-to-r from-sky-500 to-indigo-500'>
      <GradeTable 
        list={students}
      />
    </div>
  );
}

export default Page;
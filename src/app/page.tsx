import { peopleList } from '@/data/peopleList';

const Page = () => {
  
  const chemists = peopleList.filter(person => person.profession === 'chemist');

  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo</h1>
      <h3>Algum outro texto</h3>

      {peopleList.length > 0 &&
        <ul>
          {peopleList.map(person => 
            <li key={person.id}>{person.name} - {person.profession}</li>
          )}
        </ul>
      }

      {chemists.length > 0 &&
        <>
          <h3>Químicos:</h3>
          <ul>
            {chemists.map(person =>
              <li key={person.id}>{person.name}</li>
            )}
          </ul>
        </>
      }
      
    </div>
  );
}

export default Page;
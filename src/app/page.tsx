import { GeoForm } from '@/components/GeoForm';
import { Person } from '@/components/Person';

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo</h1>
      <h3>Algum outro texto</h3>

      <Person 
        name='Monkey D. Luffy'
        avatar='https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png'
        roles= {[
            'Capitão dos Mugiwara',
            'Futuro rei dos piratas'
          ]}
      />
      <Person 
        name='Roronoa Zoro'
        avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAiHP5tf_ulUzv7tvKTH-cfEbz-w-wBg8Lbx8Z8mx2clIn0PpWEoVVimp4jbrO1jRl0pCyMu6bkKzJ70fTY-7e38zUTQPFVB9eBO_yss'
        roles= {[
            'Primeiro imediato dos Mugiwara',
            'Futuro maior espadachim do mundo'
          ]}
      />
    </div>
  );
}

export default Page;
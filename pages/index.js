import Image from "next/image";

function Home() {
    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center', // Centraliza horizontalmente
          alignItems: 'center', // Centraliza verticalmente
          height: '100vh' // Ocupa a altura total da tela
        }}>
        <div style={{
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}>
            <h1>Cadê o meu?</h1>
            <Image
                src="/pqto.gif"
                alt="Meu Pqto"
                width={1000}
                height={500}
            />
          </div>
        </div>
      );
}

export default Home;
import { List } from  '@/components'

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-8">
          <h1 className="text-3xl font-bold">Lista Minimalista</h1>
        </div>
      </header>
       <div className="p-20">
      <List />
       </div>
      <footer className="bg-gray-200 py-4 px-8 mt-auto">
        <p className="text-center text-gray-600">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <h1>ola</h1>
        <div className="bg-white rounded-2xl border-2 border-black w-2/5 h-96 flex flex-col items-center">
            <h1 className="pt-6 text-3xl">LOGIN</h1>
            <form action="" className="flex flex-col pt-12 w-96">
                <label className="pt-2 pb-2">Email</label>
                <input type="text" className="bg-[#D9D9D9] rounded-lg h-6 pl-2" />

                <label className="pt-8 pb-2">Senha</label>
                <input type="password" className="bg-[#D9D9D9] rounded-lg h-6 pl-2" />

                <button className="w-40 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Enviar</button>
            </form>
        </div>
    </div>
  );
}

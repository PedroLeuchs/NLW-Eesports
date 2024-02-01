import "./styles/main.css";
import { useState, useEffect } from "react";
import Logo from "./assets/Logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/Input";

interface Game {
  bannerUrl: string;
  id: string;
  title: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
      <img src={Logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-gradient bg-clip-text ">duo</span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/60">
            <Dialog.Title className="text-white text-3xl font-black">
              Publique um Anúncio
            </Dialog.Title>
            <Dialog.Description>
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">
                    Qual o Game?
                  </label>
                  <Input
                    id="game"
                    placeholder="Selecione o game que deseja jogar"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input
                    id="name"
                    placeholder="como te chamam dentro do game?"
                  />
                </div>
                <div className="flex justify-between items-center gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input
                      type="number"
                      id="yearsPlaying"
                      placeholder="Tudo bem ser ZERO"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual o seu Discord?</label>
                    <Input id="discord" placeholder="Usuario#0000" />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Quando costuma jogar?</label>
                    <div className="grid grid-cols-4 gap-1 gap-y-3">
                      <button
                        className="w-8 h-8 bg-zinc-900 rounded "
                        title="Domingo"
                      >
                        D
                      </button>
                      <button
                        className="w-8 h-8 bg-zinc-900 rounded "
                        title="Segunda"
                      >
                        S
                      </button>
                      <button
                        className="w-8 h-8 bg-zinc-900 rounded "
                        title="Terça"
                      >
                        T
                      </button>
                      <button
                        className="w-8 h-8 bg-zinc-900 rounded "
                        title="Quarta"
                      >
                        Q
                      </button>
                      <button
                        className="w-8 h-8 bg-zinc-900 rounded "
                        title="Quinta"
                      >
                        Q
                      </button>
                      <button
                        className="w-8 h-8 bg-zinc-900 rounded "
                        title="Sexta"
                      >
                        S
                      </button>
                      <button
                        className="w-8 h-8 bg-zinc-900 rounded "
                        title="Sábado"
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual o horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hourStart" type="time" placeholder="De" />
                      <Input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2 text-sm">
                  <Input id="voiceChannel" type="checkbox" />
                  Costume me conectar ao chat de voz
                </div>
                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.DialogClose
                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                    type="button"
                  >
                    Cancelar
                  </Dialog.DialogClose>
                  <button
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-2 hover:bg-violet-600"
                    type="submit"
                  >
                    <GameController size={24} />
                    Encontrar seu duo
                  </button>
                </footer>
              </form>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;

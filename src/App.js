import hero from "./assets/jake-hero.png";
import spotifyIcon from "./assets/spotify-white.png";
import youtubeIcon from "./assets/youtube.webp";
import githubIcon from "./assets/github-white.webp";
import webhooksIcon from "./assets/spotify-webhooks.png";

const links = [
  {
    href: "https://linktr.ee/whitehouseremix",
    label: "My Music",
    icon: spotifyIcon,
  },
  {
    href: "https://www.youtube.com/@jakewhiteyo",
    label: "My YouTube Channel",
    icon: youtubeIcon,
  },
  {
    href: "https://github.com/jakewhiteyo",
    label: "My GitHub",
    icon: githubIcon,
  },
  {
    href: "https://spotifywebhooks.com",
    label: "Spotify Webhooks",
    icon: webhooksIcon,
  },
];

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-800 pt-[6vh]">
      <img
        className="block h-auto w-[35vw] sm:w-[min(16vw,210px)]"
        src={hero}
        alt="Jake White"
      />
      <div className="text-white text-xl text-center mt-10 px-10 max-w-2xl">
        This website used to be for getting a job.
        <br /> I already have a job, so now it can be whatever I want :)
      </div>
      {links.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center gap-3 px-10 text-xl text-white hover:underline"
        >
          <img src={icon} alt="" className="h-7 w-7 shrink-0 object-contain" />
          {label}
        </a>
      ))}
    </main>
  );
}

export default App;

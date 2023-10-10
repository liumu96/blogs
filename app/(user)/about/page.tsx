import Image from "next/image";

const page = () => {
  return (
    <div className="text-center flex flex-col items-center max-w-2xl pb-32 mx-auto pt-24">
      <Image
        className="rounded-full"
        src="/me.jpg"
        width={200}
        height={200}
        alt="logo"
        priority={false}
      />
      <h1 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
        Hi,{" "}
        {/* <span className="bg-indigo-400 text-white rounded px-1 dark:bg-indigo-500"> */}
        I&apos;m Liu Xing {/* </span>{" "} */}. Nice to meet you.
      </h1>
      <p className="text-gray-600 mt-4 dark:text-indigo-200">
        I used to be a Frontend Developer. I develop 3D visuals, user interfaces
        and web applications.
      </p>
      <br />
      <p className="text-gray-600  dark:text-indigo-200">
        Now I&apos;m a{" "}
        <span className="font-semibold text-blue-600">independent learner</span>{" "}
        with a strong interest in
        <span className="font-semibold text-blue-600"> Computer Graphics</span>!
        .
      </p>
      <br />
      <p className="text-gray-600  dark:text-indigo-200">
        My research interest is{" "}
        <span className="font-semibold text-blue-600">
          {/* Physics Animation and Simulation. */}
          Physically-based simulation and animation.
        </span>
      </p>
      <div className="text-center pt-8 flex space-x-2">
        <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-indigo-600">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://liuxing96.vercel.app/CV"
          >
            CV
          </a>
        </button>
        <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-indigo-600">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://liuxing96.vercel.app/#projects"
          >
            See My Works
          </a>
        </button>
      </div>
    </div>
  );
};

export default page;

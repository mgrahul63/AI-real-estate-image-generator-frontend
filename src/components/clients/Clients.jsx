export default function Clients() {
  return (
    <section className="bg-gray-100 dark:text-gray-100 py-8">
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <div className="flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-0">
          <img src={"/assets/images/1.png"} alt="" className="w-[150px] bg-white p-4" />
          <img src={"/assets/images/2.png"} alt="" className="w-[150px] bg-white p-4" />
          <img src={"/assets/images/3.png"} alt="" className="w-[150px] bg-white p-4" />
          <img src={"/assets/images/4.png"} alt="" className="w-[150px] bg-white p-4" />
          <img src={"/assets/images/5.png"} alt="" className="w-[150px] bg-white p-4" />
        </div>
      </div>
    </section>
  );
}

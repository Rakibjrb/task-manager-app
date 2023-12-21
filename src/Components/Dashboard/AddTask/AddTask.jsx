const AddTask = () => {
  return (
    <div className="md:min-h-screen flex items-center justify-center">
      <form className="md:w-[400px] lg:w-[600px] bg-transparent border border-green-400 px-4 py-8 rounded-lg">
        <h1 className="text-4xl text-green-400 text-center font-bold">
          Add a Task
        </h1>
        <div className="mt-8 space-y-5 mb-4">
          <input
            className="w-full p-4 placeholder:text-green-400 rounded-lg border border-green-400 outline-none text-green-400"
            type="text"
            placeholder="write task title"
            required
          />
          <textarea
            rows={5}
            className="w-full p-4 placeholder:text-green-400 rounded-lg border border-green-400 outline-none text-green-400"
            placeholder="write task description"
          ></textarea>
          <div className="flex gap-4">
            <input
              type="date"
              className="w-full p-4 placeholder:text-green-400 rounded-lg border border-green-400 outline-none text-green-400"
            />
            <select className="w-full p-4 placeholder:text-green-400 rounded-lg border border-green-400 outline-none text-green-400">
              <option value="none">Select Priority</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <button className="w-full hover:bg-slate-400 rounded-lg bg-green-400 text-black uppercase btn">
          Add Now
        </button>
      </form>
    </div>
  );
};

export default AddTask;

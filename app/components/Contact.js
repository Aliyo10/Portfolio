"use client";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center mt-50">
        <h1 id="contacter" className="text-7xl font-codecpro">ME CONTACTER</h1>
      </div>

      <div className="flex justify-center items-center mt-20 mb-40">
        <form
          action="https://formspree.io/f/xjkyepna"
          id="form"
          method="POST"
          className="bg-white rounded-2xl shadow-lg p-10 w-[90%] max-w-[800px] font-codecpro"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700">
                Prénom / Nom
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="_replyto"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-black"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block mb-2 text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full text-black p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            ></textarea>
          </div>

          <input type="hidden" name="_next" value="https://tonportfolio.com/merci" />
          <input
            className="text-black"
            type="hidden"
            name="_subject"
            value="Nouveau message depuis ton portfolio !"
          />

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="py-4 px-10 rounded-[30px] border cursor-pointer bg-gradient-to-r from-orange-500 via-orange-600 to-red-700 text-white font-bold transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
            >
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

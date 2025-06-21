export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <header>
        <h1 className="text-4xl font-bold mb-8">Office Community Board</h1>
      </header>
      <main className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <section className="flex-1 p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Share</h2>
          <ul>
            <li className="mb-2">Extra office supplies (pens, paper)</li>
            <li className="mb-2">Homemade cookies (nut-free)</li>
            <li>Need a ride to the conference?</li>
          </ul>
        </section>
        <section className="flex-1 p-6 border rounded-lg shadow-md">
 <h2 className="text-2xl font-semibold mb-4">Require</h2>
          <ul>
            <li className="mb-2">Looking for a charging cable for iPhone</li>
            <li>Seeking recommendations for lunch spots nearby</li>
          </ul>
        </section>
      </main>

      <section className="w-full max-w-4xl mt-8 p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Raise a Ticket</h2>
 <form className="flex flex-col gap-4">
 <div>
 <label htmlFor="title" className="block text-sm font-medium text-gray-700">
 Title
 </label>
 <input
 type="text"
 id="title"
 name="title"
 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
 />
 </div>
 <div>
 <label htmlFor="description" className="block text-sm font-medium text-gray-700">
 Description
 </label>
 <textarea
 id="description"
 name="description"
 rows="3"
 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
 ></textarea>
 </div>
 <button
 type="submit"
 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
 >
 Submit Ticket
 </button>
 </form>
 </section>

 <section className="w-full max-w-4xl mt-8 p-6 border rounded-lg shadow-md">
 <h2 className="text-2xl font-semibold mb-4">Existing Tickets</h2>
 <div className="space-y-4">
 <div className="border p-4 rounded-md">
 <h3 className="text-lg font-semibold">Help with printer issue</h3>
 <p className="text-gray-600">
 The printer on the second floor is not working. Can someone with technical skills take a look?
 </p>
 <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
 Accept
 </button>
 </div>
 <div className="border p-4 rounded-md">
 <h3 className="text-lg font-semibold">Looking for a stapler</h3>
 <p className="text-gray-600">Does anyone have a stapler I could borrow for a few hours?</p>
 <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
 Accept
 </button>
 </div>
 </div>
 </section>
    </div>
  );
}

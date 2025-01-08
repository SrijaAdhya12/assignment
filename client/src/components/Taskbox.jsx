import { BsThreeDotsVertical } from 'react-icons/bs'

const Taskbox = () => {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-6 shadow-lg rounded-lg bg-white p-4 border border-gray-100 relative hover:scale-105 transition-all duration-300">
				<div className="flex flex-col items-center justify-center bg-white  shadow-lg rounded-lg p-4 gap-2 bottom-2 border-gray-500">
					<h1 className="text-4xl font-bold text-yellow-500">25</h1>
					<p className="text-sm text-yellow-500">Days Left</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-semibold">Sadasyata Suchi</h3>
					<div className="text-sm justify-center items-center bg-yellow-100 border-yellow-500 border-2 rounded-xl text-center w-24 py-1">
						To Do
					</div>
				</div>
				<BsThreeDotsVertical className="absolute right-4 top-4 text-gray-700" />
			</div>

			<div className="flex items-center gap-6 shadow-lg rounded-lg bg-white p-4 border relative hover:scale-105 transition-all duration-300">
				<div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 gap-2 bottom-2 border-gray-500">
					<h1 className="text-4xl font-bold text-red-700">3</h1>
					<p className="text-sm text-red-700">Days past</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-semibold">Sangathan Yatra</h3>
					<div className="text-sm justify-center items-center bg-red-100 border-red-500 border-2 rounded-xl text-center w-24 py-1">
						Due
					</div>
				</div>
				<BsThreeDotsVertical className="absolute right-4 top-4 text-gray-700" />
			</div>

			<div className="flex items-center gap-6 shadow-lg rounded-lg bg-white p-4 border border-gray-100 relative hover:scale-105 transition-all duration-300">
				<div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 gap-2 bottom-2 border-gray-500">
					<h1 className="text-4xl font-bold text-blue-500">3</h1>
					<p className="text-sm text-blue-500">Days Left</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-semibold">Sangathan Yatra</h3>
					<div className="text-sm justify-center items-center bg-blue-200 border-blue-500 border-2 rounded-xl text-center w-24 py-1">
						In Progress
					</div>
				</div>
				<BsThreeDotsVertical className="absolute right-4 top-4 text-gray-700" />
			</div>

			<div className="flex items-center gap-6 shadow-lg rounded-lg bg-white p-4 border border-gray-100 relative hover:scale-105 transition-all duration-300">
				<div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 gap-2 bottom-2 border-gray-500">
					<h1 className="text-4xl font-bold text-green-700">3</h1>
					<p className="text-sm text-green-700">Days Left</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-semibold">Sangathan Yatra</h3>
					<div className="text-sm justify-center items-center bg-green-300 border-green-500 border-2 rounded-xl text-center w-24 py-1">
						Completed
					</div>
				</div>
				<BsThreeDotsVertical className="absolute right-4 top-4 text-gray-700" />
			</div>
		</div>
	)
}

export default Taskbox

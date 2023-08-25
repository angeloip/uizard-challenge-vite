export default function ListItemLoading() {
  return (
    <div className="grid h-[50px] items-center">
      <div className="w-full animate-pulse" role="status">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-full animate-pulse" role="status">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="w-full animate-pulse flex justify-end" role="status">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-14"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}

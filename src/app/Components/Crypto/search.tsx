
"use client "

const Search = () => {

  return (
    <div className="flex justify-center mt-8 mx-10">
      <div className=" flex w-[70%] shadow-lg rounded-lg overflow-hidden bg-white">
        <input
          type="search"
          className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
          placeholder="Search"
          aria-label="Search"
          id="exampleFormControlInput3"
          aria-describedby="button-addon3" />
        <button
          className="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
          data-twe-ripple-init
          data-twe-ripple-color="white"
          type="button"
          id="button-addon3">
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
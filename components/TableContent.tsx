import React from 'react'

const TableContent = () => {
  return (
    <aside className=' max-w-[90%] p-0 ml-10'>
    <div className='md:block md:relative md:flex-nowrap p-8 shadow-xl bg-white rounded lg:sticky lg:top-[10%] lg:right-[0] lg:left-[0] lg:inline-block'>
        <div className=' font-semibold text-[20px] mb-4'>Innehållsförteckning</div>
        <ol className=' list-decimal pl-[15px]'>
            <li className='mb-2 hover:underline'>
            <a href="#Designmallar">Designmallar</a>
            </li>
            <li className='mb-2 hover:underline'>
                <a href="#Strategisk-webbdesign-och-UX/UI">Strategisk webbdesign och UX/UI</a>
            </li>
            <li className='mb-2 hover:underline'>
                <a href="#Marknadsföring-och-grafisk-design">Marknadsföring och grafisk design</a>
            </li>
            <li className='mb-2 hover:underline'>
                <a href="#Support-och-underhåll">Support och underhåll</a>
            </li>
        </ol>
    </div>
</aside>
  )
}

export default TableContent
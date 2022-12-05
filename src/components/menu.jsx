import mainvid from './images/mainvid.mp4'
import work from './images/work.gif'
import render1 from './images/render.gif'
import render2 from './images/render2.gif'
import testdrive1 from './images/testdrive1.gif'
import testdrive2 from './images/testdrive2.gif'
import testdrive3 from './images/testdrive3.gif'
import avtg from './images/avtg.gif'
import jkhg from './images/jkhg.gif'
import warg from './images/warg.gif'

function Menu() {
    return(
        <div className="rounded-md backdrop-blur-sm bg-white/30 h-max w-[90%] m-auto flex flex-col mt-10 mb-10 shadow-md">
            <div className="flex flex-row flex-wrap">
               <div className="h-[100%] w-[100%]">
                    <div className="text-center text-black font-bold bg-indigo-400 rounded-tl-md"></div>
                    <div className="p-2 align-middle text-center text-white">
                        <div className="shadow-blackBg rounded-md bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 animate-bg font-bold">Основная идея инновационной электротехники</div>
                    </div>
                    <div className="flex flex-col items-center sm:mt-[5vh]">
                        <video className='rounded-md p-3' src={mainvid} controls/>
                    </div>
                    <div className='sm:flex sm:justify-center sm:mt-[10vh] sm:mb-[10vh]'>
                        <div className='flex flex-col sm:flex-row items-center text-white text-center gap-5 p-5 sm:'>
                            <div className='w-[80%] p-1 border-b border-indigo-500 sm:border-none'>Дешевле за счет модульной унифицированной конструкции и отсутствия сложных для производства деталей, требующих дорогостоящего оборудования (узкопрофильных станков)</div>
                            <div className='w-[80%] p-1 border-b border-indigo-500 sm:border-none'>Машина обладает более высокой маневренностью среди конкурентов, упрощает парковку (имеется боковой ход) может делать разворот на месте.</div>
                            <div className='w-[80%] p-1 border-b border-indigo-500 sm:border-none'>В случае отказа тормозов может остановиться за счет изменения схождения колес.</div>
                            <div className='w-[80%] p-1 border-b border-indigo-500 sm:border-none'>Имеет возможность преодолевать водные преграды за счет возможности использования герметичного корпуса тк нету рулевых тяг и приводов на колеса.</div>
                            <div className='w-[80%] p-1 border-b border-indigo-500 sm:border-none'>Обладает инновационной системой курсовой устойчивости за счет управления каждым мотором на каждое колесо в зависимости от угла поворота руля.</div>
                        </div>
                    </div>
                    
                    <div className="p-2 align-middle text-center text-white">
                        <div className="shadow-blackBg rounded-md bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 animate-bg font-bold">Процесс создания первого экземпляра</div>
                    </div>
                    
                    <div className='flex flex-col sm:flex-row justify-center text-center text-white'>
                        <div className='flex flex-col'>
                            <img src={render2} alt='gif' className='rounded-md p-5'/>
                            <div className='p-2'>Разработка рендера внешнего вида</div>
                        </div>
                        <div className='flex flex-col'>
                            <img src={render1} alt='gif' className='rounded-md p-5'/>
                            <div className='p-2'>Разработка рендера вида изнутри</div>
                        </div>
                        <div className='flex flex-col'>
                            <img src={work} alt='gif' className='rounded-md p-5'/>
                            <div className='p-2'>Разработка в реальном виде началась</div>
                        </div>
                    </div>

                    <div className="p-2 align-middle text-center text-white">
                        <div className="shadow-blackBg rounded-md bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 animate-bg font-bold">Первые испытания</div>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center text-center text-white'>
                        <div className='flex flex-col'>
                            <img src={testdrive1} alt='gif' className='rounded-md p-5'/>
                        </div>
                        <div className='flex flex-col'>
                            <img src={testdrive2} alt='gif' className='rounded-md p-5'/>
                        </div>
                        <div className='flex flex-col'>
                            <img src={testdrive3} alt='gif' className='rounded-md p-5'/>
                        </div>
                    </div>

                    <div className="p-2 align-middle text-center text-white">
                        <div className="shadow-blackBg rounded-md bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 animate-bg font-bold">Перспективы применения</div>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center text-center text-white'>
                        <div className='flex flex-col'>
                            <img src={avtg} alt='gif' className='rounded-md p-5'/>
                            <div className='p-2'>Повседневные автомобили</div>
                        </div>
                        <div className='flex flex-col'>
                            <img src={jkhg} alt='gif' className='rounded-md p-5'/>
                            <div className='p-2'>Городская техника для ЖКХ</div>
                        </div>
                        <div className='flex flex-col'>
                            <img src={warg} alt='gif' className='rounded-md p-5'/>
                            <div className='p-2'>Военная отрасль</div>
                        </div>
                    </div>

               </div>
            </div>
        </div>
    )
}

export default Menu;
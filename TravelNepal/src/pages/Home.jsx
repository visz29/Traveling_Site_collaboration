import NavigationBar from '../components/NavigationBar.jsx'

function Home(){


    return(
       <div className=" w-screen h-screen">
            <NavigationBar/>
            <main>
                <div className="page1 w-screen h-screen bg-red-400">Page1 with vishal</div>
                <div className="page2 w-screen h-screen bg-blue-400">Page2</div>
                <div className="page3 w-screen h-screen bg-green-400">Page3</div>
            </main>
       </div>
    )
}

export default Home
import Sidebar from '../Sidebar/index_si';
import './index_la.scss';

const Layout = () => {
    return (
        <div className="App">
            <><Sidebar/></>
            <div className="page">
                <span className="tags top-tags"> &lt;body&gt;</span>
            </div>
        </div>
    )
}

export default Layout;
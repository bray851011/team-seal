import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    海豹泳隊。泳者無懼。
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/sign-in'>
                        教練介紹
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        泳隊成員
                    </Link>
                    <Link className="nav-link" to='/inquiry'>
                        成績查詢
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        比賽成果
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        贊助泳隊
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        加入泳隊
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        登入系統
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
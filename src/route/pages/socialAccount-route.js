import React from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import SocialAccount from '../../pages/settings/subpages/social';


const style = {
    padding: 20,
    paddingLeft: 30,
};

export default function SetSocialAccountRoute() {
    return (
        <div>
            <div className='row space-between'>
                <div className=''>
                    <SideNav />
                </div>

                <div className='col-10'>
                    <div style={style}>
                        <TopNav />
                        <SocialAccount />
                    </div>
                </div>
            </div>
        </div>
    );
}

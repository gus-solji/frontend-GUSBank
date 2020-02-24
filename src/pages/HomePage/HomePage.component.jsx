import React,{Fragment} from 'react';
import InfoContainer from '../../components/InfoContainer/InfoContainer.component';
import WaveContainer from '../../components/WaveContainer/WaveContainer.component';
import OurPurpose from '../../components/OurPurpose/OurPurposeContainer.component';
import Footer from '../../components/Footer/Footer.component';

const HomePage = () => {
    return ( 
        <Fragment>
            <InfoContainer></InfoContainer>
            <WaveContainer></WaveContainer>
            <OurPurpose></OurPurpose>
            <Footer></Footer>
        </Fragment>
    );
}
 
export default HomePage;
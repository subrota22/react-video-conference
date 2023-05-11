import {  useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Footer from "../Footer/Footer";

const Room = () => {
    const { roomId, name } = useParams();
    console.log(roomId, name);
    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 333327147;
        const serverSecret = "e6a9ae79df72d25dc5fc2a546c3283cc";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            Date.now().toString());


        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomId,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        });


    };


    return (
        <>
           <div className="pt-12">
           {
                name && <h2 className="text-3xl text-center font-bold text-white pt-3 animate-pulse dureation-2000 title"> <span className="text-info">{name}</span> created this room 
               <i className="fa-solid fa-house text-white mx-2 hover:cursor-pointer" title="Back to the home page!!" onClick={() => (window.location="/")}></i>
                </h2>
            }
            <br /><br />
            <div
                style={{ height: "100vh", width: "100%" }}
                className="rounded-lg"
                ref={myMeeting}
            ></div>
           </div>
<Footer></Footer>
        </>
    );
};

export default Room;
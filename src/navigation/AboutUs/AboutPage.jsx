import useIsMobile from "../../Components/IsMobile"

const AboutPage = () => {
    const isMobileAndTab=useIsMobile()
    return (
        <section style={isMobileAndTab?{ display: "block", marginTop: "10px", }:{ display: "flex", marginTop: "100px", }}>
            <div className="d-none d-md-block" style={{ width: "50%", height: "90vh", }}>

                <div className="">
                    <div style={isMobileAndTab?{marginLeft:"1px"}:{marginLeft:"100px"}}>
                        <img src="/assets/sec1-img.png" width={400} height={400} alt="" />
                    </div>
                </div>
            </div>
            <div style={isMobileAndTab?{ width: "100%", textAlign:"center" }:{ width: "50%" }}>
                <div>
                    <section>
                        <div className='position-relative'>
                            <div className={`${isMobileAndTab?'text-center fs-5 fw-bolder text-info-emphasis':'fs-5 fw-bolder text-info-emphasis'}`} >About Milk Farm </div>
                            <div className={`${isMobileAndTab?'fs-4 fw-bold text-center':'fs-4 fw-bold'}`}>Dairy Farm</div>
                            <div style={{ position: "absolute", top: "-30px", left: "-130px" }}>
                                <img src="/assets/cow-head.png" className='position-absolute' width={100} alt="" />

                            </div>
                        </div>
                        <div className={`${isMobileAndTab?'w-100':'w-75'}`}>
                            <div >Volutpat sit amet leo id, efficitur mattis turpis. Dunec bibendm est. Proin ligula nisl, mattiss ollicitudin and magna et, rhon ven en ipsum. Maecenas in tempor ipsum.</div>
                            <div style={{ marginTop: "10px" }}>Volutpat sit amet leo id, efficitur mattis turpis. Dunec bibendm est. Proin ligula nisl, mattiss ollicitudin and magna et, rhon ven en ipsum. Maecenas in tempor ipsum.</div>
                        </div>
                    </section>
                    <section style={{ position: "relative" }}>
                        <div className='bg-warning d-flex justify-content-around' style={ isMobileAndTab?{ height: "150px", marginTop:"20px", width: "100%",  }:{ height: "200px", position: "absolute", width: "500px", bottom: "-250px" }}>
                            <div className='d-flex flex-row align-items-center'>
                                <div><img src="/assets/goat-white.png" alt="" /></div>
                                <div className='text-light'>
                                    <div className='fs-5'>Fresh Goat</div>
                                    <div className='fs-2 fw-bold'>Milk</div>
                                </div>
                            </div>
                            <div className='d-flex m-6  border h-50 align-items-center'></div>
                            <div className='d-flex flex-row align-items-center'>
                                <div><img src="/assets/cow-white.png" alt="" /></div>
                                <div className='text-light'>
                                    <div className='fs-5'>Fresh Cow</div>
                                    <div className='fs-2 fw-bold'>Milk</div>

                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default AboutPage
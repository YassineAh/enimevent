import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";
import "./products.css"

function Products(pro) {
    return (

        <MDBCol md="12" lg="0" className="mb-4" id='column'>
            
            <MDBCard id='card'>
                <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                >
                    <MDBCardImage
                        src={pro.img}
                        fluid
                        className="w-25"
                    />
                    <a href="#!">
                        <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                                <h5>
                                    <span className="badge bg-primary ms-2">New</span>
                                </h5>
                            </div>
                        </div>
                        <div className="hover-overlay">
                            <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                            ></div>
                        </div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <a href="#!" className="text-reset">
                        <h5 className="card-title mb-3">{pro.name}</h5>
                    </a>
                    <a href="#!" className="text-reset">
                        <p>{pro.category}</p>
                    </a>
                    <h6 className="mb-3">{pro.price}</h6>
                </MDBCardBody>
            </MDBCard>
        </MDBCol >

    )
}

export default Products
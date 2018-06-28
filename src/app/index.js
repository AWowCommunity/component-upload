import React, { Component } from "react"
import styled from "styled-components"
import { withStyles } from "@material-ui/core/styles"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import KitButton from "../Components/button"

const Container = styled.div`
    width: 200px;
`
const WrapperBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const ShowImgBox = styled.div`
    width: 200px;
    height: 180px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    background-image: url(${x => x.Img});
    background-size: 100% 100%;
    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
        0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`
const ShowImgBoxs = styled.div`
    width: 200px;
    height: 180px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    background-image: url(https://source.hilval.com/images/20180608/4f9b49a94f9f4be2a9379e48f8c23c81.jpg);
    background-size: 100% 100%;
    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
        0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`
const InputImg = styled.input.attrs({
    type: "file",
    accept: "image/*"
})`
    width: 100%;
    height: 100%;
    outline: none;
    position: absolute;
    opacity: 0;
    cursor: pointer;
`

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginRight: 10,
        width: 200
    },
    button: {
        width: 140,
        height: 40
    },
    photoCamera: {
        marginLeft: theme.spacing.unit
    }
})

@withStyles(styles)
class Upload extends Component {
    state = {
        picture: ""
    }
    handleChangInputImg = () => {
        const url = "https://api.hilval.com/upload/images"
        let body = new FormData()
        body.append("images", this.inputImg.files[0])
        fetch(url, {
            method: "POST",
            body: body
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    picture: data.datas[0].url
                })
            })
    }
    render() {
        return (
            <Container>
                <WrapperBox>
                    {this.state.picture.length > 0 ? (
                        <ShowImgBox
                            Img={`https://source.hilval.com${
                                this.state.picture
                                }`}
                        />
                    ) : (
                            <ShowImgBoxs />
                        )}
                    <KitButton color="primary" round>
                        上传图片
                        <PhotoCamera
                            className={this.props.classes.photoCamera}
                        />
                        <InputImg
                            innerRef={x => (this.inputImg = x)}
                            onChange={this.handleChangInputImg}
                        />
                    </KitButton>
                </WrapperBox>
            </Container>
        )
    }
}
export default Upload

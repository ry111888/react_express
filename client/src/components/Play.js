import {Box, Button, TextField, Typography} from "@mui/material";
import {useRef, useState} from "react";
import Axios from "axios";
function Play(){
    const inputText = useRef(null)
    const [backendData,setBackendData] = useState('')

    const handleClick = () => {
        const text = inputText.current.value;
        Axios.post('http://localhost:5000',{
            text:{text}
        }).then(
            response => {
                setBackendData(response.data)
            }
        )

    }

    return (
        <Box style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start'
        }}>
            <Typography variant='h5' style={{
                marginLeft:200,
                marginTop:50,
            }}>
                Playground
            </Typography>
            <Box style={{
                width:500,
                height:300,
                marginLeft:200,
                marginTop:20,
                border: 'solid'
            }}>
                <TextField
                    inputRef={inputText}
                    multiline
                    variant='standard'
                    defaultValue="Brainstorm some ideas:"
                    style={{
                        width:400,
                        marginLeft:20,
                        marginTop:25
                }}/>
                <Typography style={{
                    marginLeft:20,
                    marginTop:20
                }}>
                    {backendData}
                </Typography>

            </Box>

            <Button
                variant='contained'
                onClick={handleClick}
                style={{
                width : 100,
                marginLeft:200,
                marginTop:20
            }}>
                Submit
            </Button>
        </Box>
    )

}
export default  Play
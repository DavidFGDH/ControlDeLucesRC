import react from 'react'
import Appbar from "./Components/appbar"
import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import DataService from './services/DataService'
import Card from './Components/Card'
let focos =[]
function App() {
    const [loading,setloading] = react.useState(true)
  react.useEffect(()=>{
      DataService.getAll().then((response)=>{
          focos = []
          for(let i in response){
              focos.push(response[i])
          }
          console.log(focos)
          setloading(false)
      })
  },[])
  return (
    <div className="App">
      <Appbar/>
        <Container>
            {!loading && <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5" align={"center"}>
                        Control de luces
                    </Typography>
                </Grid>
                        {focos.map((foco)=>(
                            <Grid key={foco.id} style={{paddingTop:22}} item xs={12} md={6} lg={6}>
                                <Card id={foco.id}  Nombre={foco.Nombre} Estado={foco.Estado}/>
                            </Grid>
                        ))}



            </Grid>
            </>}
        </Container>
    </div>
  );
}

export default App;

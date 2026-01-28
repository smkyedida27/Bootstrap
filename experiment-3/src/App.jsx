import { Card, CardContent, TextField, Button } from '@mui/material';

function App() {
  return (
    <Card sx={{ width: 350, margin: '60px auto', padding: 2 }}>
      <CardContent>

        <h3 style={{ textAlign: 'center' }}>Login</h3>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>

      </CardContent>
    </Card>
  );
}

export default App;

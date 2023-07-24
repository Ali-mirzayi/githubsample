import Container from "./components/Container";
import FormGit from "./components/FormGit";

export default function Home() {
  return (
    <Container>
      <div style={{ maxWidth: "1100px", margin: "0 auto", overflow: "hidden", padding: "0 2rem", width: "100%", marginTop: "60px" }}>
        <FormGit />
      </div>
    </Container>
  )
}

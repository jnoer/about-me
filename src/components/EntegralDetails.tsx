import WorkDetails from "./WorkDetails.tsx";
import TechImage from "./TechImage.tsx";
import icons from "./icons.ts";


const EntegralDetails = () => {
  return (
    <WorkDetails title="Entegral">
      <p>
        Influential software engineer on a full-stack team developing a modern, responsive web
        application that connects insurers and automakers. A key technical resource and mentor
        assisting with design, coding, and troubleshooting.
      </p>

      <div style={{marginTop: '30px'}}>
        <TechImage src={icons.TypeScriptIcon}/>
        <TechImage src={icons.AngularIcon}/>
        <TechImage src={icons.NGXSIcon}/>
        <TechImage src={icons.JavaIcon}/>
        <TechImage src={icons.SpringIcon}/>
        <TechImage src={icons.GCPIcon}/>
        <TechImage src={icons.KubernetesIcon}/>
        <TechImage src={icons.MySQLIcon}/>
        <TechImage src={icons.CypressIcon}/>
      </div>
    </WorkDetails>
  )
}

export default EntegralDetails;
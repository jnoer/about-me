import WorkDetails from "./WorkDetails.tsx";
import TechImage from "./TechImage.tsx";
import icons from "./icons.ts";

const AcquiaDetails = () => {
  return (
    <WorkDetails title="Acquia (formerly Widen)">
      <p>
        Full-stack developer on the flagship SaaS application as part of an agile, highly collaborative team. Involved in new feature development from ideation to development to implementation. Explore new technologies to incorporate into the software's continuous evolution. Mentored new developers and participated in the hiring process. 3 time hackathon winner. Revamped <a href="https://www.thebodgery.org" style={{color: 'black', textDecoration: 'underline'}} target="_blank">thebodgery.org</a> in a Design Like Mad event.
      </p>

      <div style={{marginTop: '30px'}}>
        <TechImage src={icons.ReactIcon}/>
        <TechImage src={icons.AngularIcon}/>
        <TechImage src={icons.JestIcon}/>
        <TechImage src={icons.JavaIcon}/>
        <TechImage src={icons.HibernateIcon}/>
        <TechImage src={icons.SpringIcon}/>
        <TechImage src={icons.ElasticSearchIcon}/>
        <TechImage src={icons.AWSIcon}/>
        <TechImage src={icons.Docker}/>
        <TechImage src={icons.KubernetesIcon}/>
        <TechImage src={icons.MySQLIcon}/>
      </div>
    </WorkDetails>
  )
}

export default AcquiaDetails;
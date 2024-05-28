
1.  Install @sanity/client on your react app
    
2.  On your react folder under src/, create a file client.js with the configuration below
    
import {createClient} from '@sanity/client'
    
    export default createClient({ 
	    projectId: "7l9hdg4d", 
	    dataset: "production", 
	    apiVersion: '2021-08-31', 
	    useCdn: true, 
    });

3. On your react page where you will fetch the data, add import createClient  from "../client"; on top

4. Refer to the code below for data fetching. The dataset will depend on the created schema under sanity.io.

  const [careers, setCareers] = useState([])

     useEffect(() => {
        createClient
          .fetch(
            `*[_type == "careers"] {
            title,
            jobRole,
          }`
          )
          .then((data) => setCareers(data))
          .catch(console.error)
      }, [])

  5. For data output, call the const (e.g., {careers.title})

import Card from "./components/card";
import Search from "./components/search";
import { useList } from "./contexts/list";

function App() {
  let { fileDetails } = useList();

  const generateList = () => {
    let applicationList = []
    fileDetails.forEach(file => {
      applicationList.push(<div className="col-lg-4 col-xs-6 mb-2 mr-2" key={file.fileName} ><Card fileType={file.fileType} fileName={file.fileName}/></div>);
    });
    return applicationList
  }

  return (
    <div className="container">
      <Search />
      <div className="row">
        {generateList()}
      </div>
    </div>
  );
}

export default App;

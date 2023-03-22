 class MainData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tableData: data
        };
        this.handleDone = this.handleDone.bind(this);
      }
    
      handleDone() {
        console.log(this.state.tableData);
        this.setState({ tableData: data });
      }

       

    render() {

        const container={
            width:"100%",
          height:"600px"
        }

        return (
          <div  className="App">
            
            <table>
            <div className="heading">Month 1</div>
              {this.state.tableData.map((item) => {
                return (
                  <TableData 
                    key={item.id}
                    rowData={item}
                    setTableData={(updatedData) =>
                      this.setState({ tableData: updatedData })
                    }
                    tableData={this.state.tableData}
                  />
                );
              })}
            </table>
            <button onClick={this.handleDone}>Create API</button>
          </div>
        );
      }
}




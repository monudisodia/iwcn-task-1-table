
class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(item, event) {
    console.log(item.column);
    item.column = event.target.value;
    let newArr = this.props.tableData.map((ele) => {
      if (ele.row === this.props.rowData.data1.row) {
        ele.col = item;
      }
      return ele;
    });
    this.props.setTableData(newArr);
  }

  

  render() {
    const { row, col } = this.props.rowData.data1;

    const cardbox= {
          
    }

    return (
      <div  className=" card_box">
        <div className="col1_cards">{row}</div>
        {col.map((item, i) => {
          return (
            <input
              className="card"
              key={"item" + row + i}
              onChange={(e) => this.handleEdit(item, e)}
            />
          );
        })}
      </div>
    );
  }
}

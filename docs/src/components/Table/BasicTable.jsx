import styles from "./Table.module.scss";
import {tableData} from "@site/data/tableData";

const BasicTable = () => {
    return (
        <div className={`table-responsive  ${styles.table_wrapper}`}>
            <table className={`table ${styles.table} w-100`}>
                <thead className={`text-primary thead ${styles.thead}`}>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>City</td>
                        <td className="text-center">Score</td>
                    </tr>
                </thead>
                <tbody className={`tbody ${styles.tbody}`}>
                    {tableData.slice(0, 10).map((item, index) => (
                            <tr
                                key={index}
                            >
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td className="text-center">{item.score}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default BasicTable;

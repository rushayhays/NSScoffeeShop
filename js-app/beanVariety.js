
export function showTheBeans(listOfBeanVarieties)
{
    var areaToInsert = document.getElementById("beanVarietyTable")
    var table = `
    <table>
        <th>
            <tr>
                <td>Name</td>
                <td>Region</td>
                <td>Notes</td>
            </tr>
        </th>`
    for(let x = 0; x< listOfBeanVarieties.length; x++)
    {
        var newRow =`
        <tr>
            <td>
                ${listOfBeanVarieties[x].name}
            </td>
            <td>
                ${listOfBeanVarieties[x].region}
            </td>
            <td>
                ${listOfBeanVarieties[x].notes}
            </td>
        </tr>`;

        table += newRow
    }
    
    var end = `
        </table>`;
    table += end;

    areaToInsert.innerHTML = table;
    
}

import React,{useState} from 'react';
import "./aircraft.css";

const seatsPlan = [
    // First Class
    [{ row: 0, column: 0, label: '1A', availability: 'empty' }, { row: 0, column: 1, label: '1B', availability: 'empty' }, { row: 0, column: 2, label: '1C', availability: 'empty' }, { row: 0, column: 3, label: '1D', availability: 'empty' }],
    [{ row: 1, column: 0, label: '2A', availability: 'empty' }, { row: 1, column: 1, label: '2B', availability: 'empty' }, { row: 1, column: 2, label: '2C', availability: 'empty' }, { row: 1, column: 3, label: '2D', availability: 'empty' }],
    [{ row: 2, column: 0, label: '3A', availability: 'empty' }, { row: 2, column: 1, label: '3B', availability: 'empty' }, { row: 2, column: 2, label: '3C', availability: 'empty' }, { row: 2, column: 3, label: '3D', availability: 'empty' }],
    // Business Class
    [{ row: 3, column: 0, label: '4A', availability: 'empty' }, { row: 3, column: 1, label: '4B', availability: 'empty' }, { row: 3, column: 2, label: '4C', availability: 'empty' }, { row: 3, column: 3, label: '4D', availability: 'empty' }, { row: 3, column: 4, label: '4E', availability: 'empty' }, { row: 3, column: 5, label: '4F', availability: 'empty' }],
    [{ row: 4, column: 0, label: '5A', availability: 'empty' }, { row: 4, column: 1, label: '5B', availability: 'empty' }, { row: 4, column: 2, label: '5C', availability: 'empty' }, { row: 4, column: 3, label: '5D', availability: 'empty' }, { row: 4, column: 4, label: '5E', availability: 'empty' }, { row: 4, column: 5, label: '5F', availability: 'empty' }],
    [{ row: 5, column: 0, label: '6A', availability: 'empty' }, { row: 5, column: 1, label: '6B', availability: 'empty' }, { row: 5, column: 2, label: '6C', availability: 'empty' }, { row: 5, column: 3, label: '6D', availability: 'empty' }, { row: 5, column: 4, label: '6E', availability: 'empty' }, { row: 5, column: 5, label: '6F', availability: 'empty' }],
    [{ row: 6, column: 0, label: '7A', availability: 'empty' }, { row: 6, column: 1, label: '7B', availability: 'empty' }, { row: 6, column: 2, label: '7C', availability: 'empty' }, { row: 6, column: 3, label: '7D', availability: 'empty' }, { row: 6, column: 4, label: '7E', availability: 'empty' }, { row: 6, column: 5, label: '7F', availability: 'empty' }],
    [{ row: 7, column: 0, label: '8A', availability: 'empty' }, { row: 7, column: 1, label: '8B', availability: 'empty' }, { row: 7, column: 2, label: '8C', availability: 'empty' }, { row: 7, column: 3, label: '8D', availability: 'empty' }, { row: 7, column: 4, label: '8E', availability: 'empty' }, { row: 7, column: 5, label: '8F', availability: 'empty' }],
    [{ row: 8, column: 0, label: '9A', availability: 'empty' }, { row: 8, column: 1, label: '9B', availability: 'empty' }, { row: 8, column: 2, label: '9C', availability: 'empty' }, { row: 8, column: 3, label: '9D', availability: 'empty' }, { row: 8, column: 4, label: '9E', availability: 'empty' }, { row: 8, column: 5, label: '9F', availability: 'empty' }],
    [{ row: 9, column: 0, label: '10A', availability: 'empty' }, { row: 9, column: 1, label: '10B', availability: 'empty' }, { row: 9, column: 2, label: '10C', availability: 'empty' }, { row: 9, column: 3, label: '10D', availability: 'empty' }, { row: 9, column: 4, label: '10E', availability: 'empty' }, { row: 9, column: 5, label: '10F', availability: 'empty' }],
    // Economy Class
    [{ row: 10, column: 0, label: '11A', availability: 'empty' }, { row: 10, column: 1, label: '11B', availability: 'empty' }, { row: 10, column: 2, label: '11C', availability: 'empty' }, { row: 10, column: 3, label: '11D', availability: 'empty' }, { row: 10, column: 4, label: '11E', availability: 'empty' }, { row: 10, column: 5, label: '11F', availability: 'empty' }],
    [{ row: 11, column: 0, label: '12A', availability: 'empty' }, { row: 11, column: 1, label: '12B', availability: 'empty' }, { row: 11, column: 2, label: '12C', availability: 'empty' }, { row: 11, column: 3, label: '12D', availability: 'empty' }, { row: 11, column: 4, label: '12E', availability: 'empty' }, { row: 11, column: 5, label: '12F', availability: 'empty' }],
    [{ row: 12, column: 0, label: '13A', availability: 'empty' }, { row: 12, column: 1, label: '13B', availability: 'empty' }, { row: 12, column: 2, label: '13C', availability: 'empty' }, { row: 12, column: 3, label: '13D', availability: 'empty' }, { row: 12, column: 4, label: '13E', availability: 'empty' }, { row: 12, column: 5, label: '13F', availability: 'empty' }],
    [{ row: 13, column: 0, label: '14A', availability: 'empty' }, { row: 13, column: 1, label: '14B', availability: 'empty' }, { row: 13, column: 2, label: '14C', availability: 'empty' }, { row: 13, column: 3, label: '14D', availability: 'empty' }, { row: 13, column: 4, label: '14E', availability: 'empty' }, { row: 13, column: 5, label: '14F', availability: 'empty' }],
    [{ row: 14, column: 0, label: '15A', availability: 'empty' }, { row: 14, column: 1, label: '15B', availability: 'empty' }, { row: 14, column: 2, label: '15C', availability: 'empty' }, { row: 14, column: 3, label: '15D', availability: 'empty' }, { row: 14, column: 4, label: '15E', availability: 'empty' }, { row: 14, column: 5, label: '15F', availability: 'empty' }],
    [{ row: 15, column: 0, label: '16A', availability: 'empty' }, { row: 15, column: 1, label: '16B', availability: 'empty' }, { row: 15, column: 2, label: '16C', availability: 'empty' }, { row: 15, column: 3, label: '16D', availability: 'empty' }, { row: 15, column: 4, label: '16E', availability: 'empty' }, { row: 15, column: 5, label: '16F', availability: 'empty' }],
    [{ row: 16, column: 0, label: '17A', availability: 'empty' }, { row: 16, column: 1, label: '17B', availability: 'empty' }, { row: 16, column: 2, label: '17C', availability: 'empty' }, { row: 16, column: 3, label: '17D', availability: 'empty' }, { row: 16, column: 4, label: '17E', availability: 'empty' }, { row: 16, column: 5, label: '17F', availability: 'empty' }],
    [{ row: 17, column: 0, label: '18A', availability: 'empty' }, { row: 17, column: 1, label: '18B', availability: 'empty' }, { row: 17, column: 2, label: '18C', availability: 'empty' }, { row: 17, column: 3, label: '18D', availability: 'empty' }, { row: 17, column: 4, label: '18E', availability: 'empty' }, { row: 17, column: 5, label: '18F', availability: 'empty' }],
    [{ row: 18, column: 0, label: '19A', availability: 'empty' }, { row: 18, column: 1, label: '19B', availability: 'empty' }, { row: 18, column: 2, label: '19C', availability: 'empty' }, { row: 18, column: 3, label: '19D', availability: 'empty' }, { row: 18, column: 4, label: '19E', availability: 'empty' }, { row: 18, column: 5, label: '19F', availability: 'empty' }],
    [{ row: 19, column: 0, label: '20B', availability: 'empty' }, { row: 19, column: 1, label: '20C', availability: 'empty' }, { row: 19, column: 2, label: '20D', availability: 'empty' }, { row: 19, column: 3, label: '20E', availability: 'empty' }]
  ];
  

const AircraftSeating = () => { 
    const [seatSelection,setSeatSelection]=useState([]);



    const onSeatHandler = (seat) => {
        setSeatSelection((prevSeatSelection) => {
           if(prevSeatSelection.includes(seat)) {   
            return prevSeatSelection.filter((addedSeat) => addedSeat !== seat 
           );
           } else {
               return [...prevSeatSelection,seat];
           }
        });
    };

    const submitSeatHandler = (seats,seating) =>{
        if (seats.length===0) { 
            alert("Please select seat")
            return 
        }
        const seatLabel = seats.map((seat)=> seat.label)
        for (let seat of seats) {
            let leftCount = 0;
            let rightCount = 0;
        for (let col = Number(seat.column-1); col >=0; col--) {
            let leftSeat = seatsPlan[seat.row][col]
            if (leftSeat.availability === "empty" && !seatLabel.includes(leftSeat.label)) {
                leftCount +=1
            } else if (leftSeat.availability !=="empty" || seatLabel.includes(leftSeat.label) ) {
                break 
            }

        }   
        for (let col = Number(seat.column+1); col<seatsPlan[seat.row].length; col++) {
            let rightSeat = seatsPlan[seat.row][col]
            if (rightSeat.availability === "empty" && !seatLabel.includes(rightSeat.label)) {
                rightCount +=1
            } else if (rightSeat.availability !=="empty" || seatLabel.includes(rightSeat.label) ) {
                break 
            }

        } 
    
        if (leftCount===1 || rightCount === 1){
            alert("Your Selection has caused a scattered seat , Pick another seat!!!")
            return
        }
        else { 
            for (let seat of seats) {
                seating[seat.row][seat.column].availability="blocked"
                setSeatSelection([])
            }

            alert("Seat selection Confirmed")
        return
        }
        }

    }

    return (   
  <div>
      <h1>Seating Plan</h1>
    {seatsPlan.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map(seat => (
          <div key={seat.label}
           className={`seat ${seat.availability ==="blocked"?"blocked":"" } ${(row.length / 2) === seat.column? 'aisle' : ''} ${seatSelection.includes(seat)?
        "selected":""}`} 
           onClick={seat.availability !=="blocked" ? () => onSeatHandler(seat) : null}>
            {seat.label}
          </div>
        ))}
      </div>
    ))}
    <div className='btn-container row'>
    <button onClick={()=>
        submitSeatHandler(seatSelection,seatsPlan)
     } >Confirm Seat</button> </div>
  </div>)
};

export default AircraftSeating;

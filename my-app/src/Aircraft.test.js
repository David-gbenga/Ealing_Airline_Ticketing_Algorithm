import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AircraftSeating from './AircraftSeating';


  test('renders Seating Plan heading', () => {
    render(<AircraftSeating />);
    const heading = screen.getByText(/Seating Plan/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders seats', () => {
    render(<AircraftSeating />);
    const seats = screen.getAllByText(/A|B|C|D|E|F/i);
    expect(seats.length).toBeGreaterThan(0);
  });

  test('selects and deselects a seat', () => {
    render(<AircraftSeating />);
    const seat = screen.getByText('1A');

    // Select the seat
    fireEvent.click(seat);
    expect(seat).toHaveClass('selected');

    // Deselect the seat
    fireEvent.click(seat);
    expect(seat).not.toHaveClass('selected');
  });

  test('does not allow selection of blocked seat', () => {
    render(<AircraftSeating />);
    const seat = screen.getByText('1A');
    
    // Block the seat
    fireEvent.click(seat);
    fireEvent.click(screen.getByText('Confirm Seat'));
    expect(seat).toHaveClass('blocked');

    // Attempt to select the blocked seat
    fireEvent.click(seat);
    expect(seat).toHaveClass('blocked');
  });

  test('displays an alert when no seats are selected', () => {
    render(<AircraftSeating />);
    const confirmButton = screen.getByText('Confirm Seat');
    
    window.alert = jest.fn(); // Mock window.alert
    fireEvent.click(confirmButton);
    
    expect(window.alert).toHaveBeenCalledWith('Please select seat');
  });

  test('confirms seat selection', () => {
    render(<AircraftSeating />);
    const seat = screen.getByText('1A');
    
    fireEvent.click(seat);
    fireEvent.click(screen.getByText('Confirm Seat'));
    
    expect(seat).toHaveClass('blocked');
    expect(window.alert).toHaveBeenCalledWith('Seat selection Confirmed');
  });

  test('displays an alert for scattered seat selection', () => {
    render(<AircraftSeating />);
    const seat1 = screen.getByText('1A');
    const seat2 = screen.getByText('1C');

    fireEvent.click(seat1);
    fireEvent.click(seat2);
    
    window.alert = jest.fn(); // Mock window.alert
    fireEvent.click(screen.getByText('Confirm Seat'));
    
    expect(window.alert).toHaveBeenCalledWith('Your Selection has caused a scattered seat , Pick another seat!!!');
  });

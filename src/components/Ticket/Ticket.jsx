import Button from '../Button/Button';

import { stopsCount } from '../../utils/helpers';

import { styles } from './styles';

const Ticket = ({ ticket }) => {
  const handleBuyTicket = () => {
    alert(
      `Ваш билет из ${ticket.origin_name} в ${ticket.destination_name} успешно куплен`
    );
  };

  return (
    <div style={styles.ticket_block}>
      <div style={styles.airlines_block}>
        <h1>{ticket.carrier}</h1>
        <Button price={ticket.price} onClick={handleBuyTicket} />
      </div>
      <div style={styles.details_block}>
        <div style={styles.departure_block}>
          <span style={styles.departure_time}>{ticket.departure_time}</span>
          <span>
            <strong>{ticket.origin}</strong>, {ticket.origin_name}
          </span>
          <p style={styles.date}>{ticket.departure_date}</p>
        </div>
        <div>
          <p style={styles.stops}>
            {ticket.stops > 0 ? ticket.stops : ''} {stopsCount(ticket.stops)}
          </p>
        </div>
        <div style={styles.departure_block}>
          <span style={styles.departure_time}>{ticket.arrival_time}</span>
          <span>
            {ticket.destination_name},<strong>{ticket.destination}</strong>
          </span>
          <p style={styles.date}>{ticket.arrival_date}</p>
        </div>
      </div>
    </div>
  );
};
export default Ticket;

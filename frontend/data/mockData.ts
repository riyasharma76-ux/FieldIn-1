export type Sport = 'Football' | 'Badminton' | 'Cricket' | 'Tennis' | 'Basketball';

// Round 1 uses frontend fixtures only. These can be replaced with API data in Round 2.
export const venues = [
  ['Greenfield Sports Complex', 'Football', 1200, '1.4', 'Clear', 42, true],
  ['SmashPoint Arena', 'Badminton', 650, '2.1', 'Indoor', 68, true],
  ['Boundary Box Cricket', 'Cricket', 1800, '3.8', 'Cloudy', 31, false],
  ['Baseline Court', 'Tennis', 900, '4.6', 'Sunny', 55, false],
  ['Hoops District', 'Basketball', 800, '2.9', 'Breezy', 74, true],
] as const;

export const tournaments = [
  ['Sunday Football League', 'Football', 'Sun, 4 Oct', 600, 8, 10],
  ['The Shuttle Social', 'Badminton', 'Sat, 3 Oct', 350, 12, 16],
  ['Monsoon Cricket Cup', 'Cricket', '12 Oct', 1500, 6, 8],
] as const;

export const squads = [
  ['Vikram needs 2 players', 'Football', 'Greenfield Sports Complex', 'Today, 7:30 PM', '₹400 / head', '3 / 5', 94],
  ['Neha is building a squad', 'Badminton', 'SmashPoint Arena', 'Tomorrow, 6:00 AM', '₹220 / head', '2 / 4', 97],
] as const;

export const soloPlayers = [
  ['Ishita Rao', 'Badminton', 'Tonight, 7:00 PM', '₹450', 96],
  ['Rahul Shah', 'Football', 'Weekend mornings', '₹500', 94],
  ['Maya Krishnan', 'Tennis', 'Tue - Thu evenings', '₹600', 98],
] as const;

export const rewardVouchers = [
  ['50% off turf booking', 90, 'Cut the cost of your next game.'],
  ['Canteen pass', 60, 'Fuel up after the final whistle.'],
  ['FieldIn pro gear', 180, 'Rep your local sporting community.'],
] as const;

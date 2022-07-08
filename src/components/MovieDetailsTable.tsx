import React from 'react';
import { Movie } from '../app/types';

function MovieDetailsTable({ movie }: { movie: Movie }) {
  return (
    <table>
      <tbody>
        <TableRow label="Actors: " value={movie.Actors} />
        <TableRow label="Awards: " value={movie.Awards} />
        <TableRow
          label="BoxOffice: "
          value={movie.BoxOffice}
        />
        <TableRow label="Country: " value={movie.Country} />
        <TableRow
          label="Director: "
          value={movie.Director}
        />
        <TableRow label="Genre: " value={movie.Genre} />
        <TableRow
          label="Language: "
          value={movie.Language}
        />
        <TableRow label="Plot: " value={movie.Plot} />
        <TableRow
          label="Released: "
          value={movie.Released}
        />
        <TableRow label="Runtime: " value={movie.Runtime} />
        <TableRow label="Type: " value={movie.Type} />
        <TableRow label="IMDB ID: " value={movie.imdbID} />
        <TableRow
          label="IMDB Rating: "
          value={movie.imdbRating}
        />
        <TableRow
          label="IMDB Votes: "
          value={movie.imdbVotes}
        />
      </tbody>
    </table>
  );
}

export default MovieDetailsTable;

type RowProps = {
  readonly label: string;
  readonly value: string;
};

function TableRow(props: RowProps) {
  return (
    <tr>
      <td className="label">{props.label}</td>
      <td>{props.value}</td>
    </tr>
  );
}

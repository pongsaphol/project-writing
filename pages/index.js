export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <p className="text-4xl font-bold pt-8 pb-4">Shortest Path Algorithm</p>
      <p className="text-xl">(written by Win Pongsawakul)</p>
      <p className="text-xl font-bold py-2 pt-4">What is graph?</p>
      <p className="max-w-4xl py-4">
        Graph is a subject in combinatorics. It is a set of objects, which are
        connected by some paths. To understand graph, we need to virtualize by
        using simulation tools provided below. There are two type of walking in
        the graph. First, breadth-first search, and second, depth-first search.
        To understand the shortest path algorithm, we need to understand graph
        searching first.
      </p>
      <iframe
        src="https://visualgo.net/en/dfsbfs"
        title="sssp"
        className="w-full max-w-5xl h-128"
      />
      <p className="text-xl font-bold pt-8">Bellman-Ford algorithm</p>
      <p className="max-w-4xl py-4">
        Bellman-Ford algorithm is an algorithm used to compute single source
        shortest paths to every node in a graph. This algorithm is very simple.
        There are only five lines of code that we need to write in the program.
        This algorithm uses a concept of dynamic programming, the same as WFI
        algorithm, and greedy algorithm to get the shortest path. This algorithm
        is not the most effective algorithm but there are some advantages that
        we found. First, this algorithm can solve short problems with negative
        weights. Negative weight edge is an edge that has a negative distance.
        For example, the distance between East Lansing and Detroit is -20. This
        is not in the real-life problem, just in theories (Cormen). This
        algorithm is very useful in research papers but not in the real world.
        Moreover, this algorithm not only provides a shortest path, but also a
        negative cycle. Negative cycle is a vital problem that we found in
        finding the shortest path because if there is an negative cycle in the
        graph, we can walk in this loop infinitely to get the length of this
        path shorter and shorter.
      </p>
      <iframe
        src="https://visualgo.net/en/sssp"
        title="sssp"
        className="w-full max-w-5xl h-128"
      />
      <p className="text-xl font-bold pt-8">Dijkstra algorithm</p>
      <p className="max-w-4xl py-4">
        The Dijkstra algorithm is the most effective and the most popular
        algorithm that we usually use to get the answer. The concept of this
        algorithm is quite hard to explain but it provides a very fast way to
        find the shortest path from a single source. The concept originated from
        Edsger Dijkstra. “One morning I was shopping in Amsterdam with my young
        fiancée, and tired, we sat down on the café terrace to drink a cup of
        coffee and I was just thinking about whether I could do this, and I then
        designed the algorithm for the shortest path. As I said, it was a
        twenty-minute invention.” (Dijkstra){" "}
      </p>
      <iframe
        src="https://visualgo.net/en/sssp"
        title="sssp"
        className="w-full max-w-5xl h-128"
      />
    </div>
  );
}

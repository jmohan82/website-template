const Phase = (props) => {
  return (
    <div className="flex flex-col space-y-8 md:w-1/2">
      {props.data
        ? props.data.map((d, i) => (
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div
                key={`${d.id}-${i}`}
                className="rounded-l-full bg-blue-100 md:bg-transparent"
              >
                <a href={`#${d.name}`}>
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-900">
                      {d.id}
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      {d.name}
                    </h3>
                  </div>
                </a>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  <a href={`#${d.name}`}>{d.name}</a>
                </h3>
                <p className="text-darkGrayishBlue">{d.description}</p>
              </div>
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default Phase;

// import FromTraining from './Observable.from';
// import NewObservableTraining from './new.Observable';
// import NewObservableCatch from './new.Observable.catch';
// import FilterTimerRange from './interval_timer_range';
// import MapPluck from './map_pluck'
// import merge_concat from "./merge_concat";
// import mergemap_concatmap_switchmap from "./mergemap_concatmap_switchmap";

import debounce from './debounce';

// FromTraining();
// NewObservableTraining();
// NewObservableCatch();
// FilterTimerRange();
// MapPluck();
// merge_concat();
// mergemap_concatmap_switchmap()

debounce();

// things to prevent memory leaks:

// avoid big objects.

// use rvalues to get dom nodes objects,

// too much closure will cause a reference to be kept in the memory

// clear your event handlers after you are done with them!!

// don't use anonymous callbacks

// try to pass only primitives. pass only things that you need.

// you have to keep in mind while writing a function "what it needs in the memory to work"

// chrome tool tips: retainers are the functions that keep reference to that onject.
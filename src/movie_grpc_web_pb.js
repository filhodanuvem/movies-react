/**
 * @fileoverview gRPC-Web generated client stub for movie
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.17.3
// source: movie.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.movie = require('./movie_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.movie.MovieClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.movie.MoviePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.movie.MovieRequest,
 *   !proto.movie.MovieResponse>}
 */
const methodDescriptor_Movie_GetMovies = new grpc.web.MethodDescriptor(
  '/movie.Movie/GetMovies',
  grpc.web.MethodType.UNARY,
  proto.movie.MovieRequest,
  proto.movie.MovieResponse,
  /**
   * @param {!proto.movie.MovieRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.movie.MovieResponse.deserializeBinary
);


/**
 * @param {!proto.movie.MovieRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.movie.MovieResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.movie.MovieResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.movie.MovieClient.prototype.getMovies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/movie.Movie/GetMovies',
      request,
      metadata || {},
      methodDescriptor_Movie_GetMovies,
      callback);
};


/**
 * @param {!proto.movie.MovieRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.movie.MovieResponse>}
 *     Promise that resolves to the response
 */
proto.movie.MoviePromiseClient.prototype.getMovies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/movie.Movie/GetMovies',
      request,
      metadata || {},
      methodDescriptor_Movie_GetMovies);
};


module.exports = proto.movie;


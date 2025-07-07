package com.movieflix.dto;

import java.util.List;

public record MoviePageResponse(List<MovieDto> movieDtos,
                                Integer pageNumber,
                                Integer pageSize,
                                int totalPages,
                                Long totalItems,
                                boolean isLast) {
}
